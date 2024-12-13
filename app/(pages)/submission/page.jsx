import React from "react";
import SubmitForm from "./components/Form";
import PaperFormat from "../papers-format/page";
import FormatCards from "./components/PaperFormat";

function page() {
  return (
    <div>
      <SubmitForm />
   <FormatCards/>
    </div>
  );
}

export default page;
