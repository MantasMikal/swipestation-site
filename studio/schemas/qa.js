import { FaQuestion } from "react-icons/fa";

export default {
  name: "qa",
  title: "Question and Answer",
  type: "object",
  icon: FaQuestion,
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "answer",
      title: "Answer",
      type: "blockContent",
    },
  ],
};
