import { Button } from "../button";
import FormControls from "./form-controls";

function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}></form>
      {/* {render from control here} */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button type="submit" className="mt-5 w-full">
        {buttonText || "Submit"}
      </Button>
    </>
  );
}

export default CommonForm;
