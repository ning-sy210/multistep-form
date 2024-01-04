import "./FormDesc.scss";

type FormDescProps = {
  header: string;
  description: string;
};

const FormDesc = ({ header, description }: FormDescProps) => {
  return (
    <>
      <h1 className="form-header">{header}</h1>
      <p className="form-desc">{description}</p>
    </>
  );
};

export default FormDesc;
