import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
// Field input olucak bu checkbox radio button text input yani her şey olabilir.
class StreamCreate extends Component {

    renderError({error, touched}){
        if(error && touched){
            return(
                <div className="ui error message">
                    <div className="header" >
                        {error}
                    </div>
                </div>
            )
        }
        else{
            return null;
        }
    }
  renderInput = ({ input, label, meta }) => {
      const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    // formProps içinde onblur onchange gibi metodlar geliyor.
    // redux-form herşeyi bizim yerimize getiriyor  bize bağlamak kalıyor.
    /*return(
            //Bu zor yolu
            <input onChange={formProps.input.onChange} value={formProps.input.value} />

        )*/
    return (
      <div className={className} >
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    // formValues içinde forma ait tüm veriler bulunmakta.
    console.log(formValues);
  }

  render() {
      // Varsayılan olarak hata gösterilmez bunun için form a error verildi.
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (formValues.title) {
    if(formValues.title.length < 5){
        errors.title = "En az 5 karakter girilmelidir";
    }
  }
  if(!formValues.title){
    errors.title = "Boş girilemez";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

const config = {
  form: "streamCreate", // form ismi verilir
  validate,
};

export default reduxForm(config)(StreamCreate);
