import { students } from "@/utils/data";
import fs from "fs";
import { stderr } from "process";

const handler = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // console.log("req", req.body);
  // try {
  //   console.log(req.body);
  const studentId = req.body.id;
  const newState = req.body.state;
  const newColor = req.body.changeColor;

  console.log(studentId, newState);
  //   // const student = students.find((student) => student.id === studentId);
  //   // student.state = newState;
  // const ind = students.findIndex((e) => e.id == studentId);
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      students[i].state = newState;
      students[i].changeColor = newColor;

      break;
    }
  }
  fs.writeFileSync(
    "src/utils/data.js",
    `export const students =${JSON.stringify(students)}`
  );
  //   res.status(200).json({ message: "Success" });
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
  res.status(200).json({ users: students });
};

export default handler;
