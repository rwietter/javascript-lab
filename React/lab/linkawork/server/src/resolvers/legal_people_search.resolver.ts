// import db from "../models";
//  const Op = Sequelize.Op; // biblioteca de operadores

// export default {
//   Query: {
//     legalPeopleSearch: (_, args) =>
//       db.legal_people_search
//         .findAll(args, { where: { US_USERNAME: { [Op.like]: args } } })
//         .then(users => {
//           res.render("main/users", { people: users });
//         })
//   },
//   Mutation: {
//     createLegalPeopleSearch: (_, args) =>
//       db.legal_people_search.create({ ...args })
//   }
// };
