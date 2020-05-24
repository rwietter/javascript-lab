import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import SkillForm from "./SkillForm";
function EditSkill({ match }) {
  return (
    <Card>
      <CardHeader title="Edit skill" />
      <CardContent>
        <SkillForm id={match.params.id} />
      </CardContent>
    </Card>
  );
}

export default EditSkill;
