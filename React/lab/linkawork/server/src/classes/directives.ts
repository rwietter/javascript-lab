import { AuthenticationError, SchemaDirectiveVisitor } from "apollo-server";
import { defaultFieldResolver, GraphQLString } from "graphql";
import i18next from "i18next";
import * as moment from "moment";

//is auth permission
class authDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;
    const { name } = this.args;
    field.resolve = async function(...args: any) {
      let { user } = args[2];
      if (!user)
        throw new AuthenticationError(i18next.t("geral.Must authenticate"));
      if (!name) {
        const result = await resolve.apply(this, args);
        return result;
      } else {
        if (user.permissions.indexOf(name) < 0)
          throw new AuthenticationError(i18next.t("geral.Must authenticate"));
        const result = await resolve.apply(this, args);
        return result;
      }
    };
  }
}

//upper case
class UpperCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args: any) {
      const result = await resolve.apply(this, args);
      if (typeof result === "string") {
        return result.toUpperCase();
      }
      return result;
    };
  }
}

//date format
class DateFormatDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;
    const { format } = this.args;
    field.resolve = async function(...args: any) {
      const date = await resolve.apply(this, args);
      return moment(date).format(format);
    };
    // The formatted Date becomes a String, so the field type must change:
    field.type = GraphQLString;
  }
}

class DeprecatedDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    field.isDeprecated = true;
    field.deprecationReason = this.args.reason;
  }

  visitEnumValue(value: any) {
    value.isDeprecated = true;
    value.deprecationReason = this.args.reason;
  }
}

//automatic pagination
class HasPagination extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args: any) {
      let limit: number, offset: number;
      if (args[1].limit || args[1].limit == 0) {
        limit = args[1].limit;
        delete args[1].limit;
      }
      if (args[1].offset || args[1].offset == 0) {
        offset = args[1].offset;
        delete args[1].offset;
      }
      args[1] = {
        where: {
          ...args[1]
        },
        limit,
        offset
      };
      const result = await resolve.apply(this, args);
      return result;
    };
  }
}

export default {
  auth: authDirective,
  upper: UpperCaseDirective,
  date: DateFormatDirective,
  deprecated: DeprecatedDirective,
  pagination: HasPagination
};
