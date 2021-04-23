import React from 'react'

export default function Form(props) {
  const { values, update, submit, change, errors } = props

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
    update(name, value)
  }
  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  return (
    <form className="pizza-form" onSubmit={onSubmit}>
      <div className="form-group submit">
            <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.size}</div>
                <div>{errors.toppings}</div>
            </div>
       </div>
       <div className="form-group inputs">
           <div className= "contact-info">
               <h4>Contact Info</h4>
                <label id= "name-input">Name
                <input
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    placeholder="Enter an order name..."
                    maxLength="30"
                />
                </label>

                <label>Email
                <input
                    type="text"
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    placeholder="Enter a confirmation email..."
                />
                </label>
            </div>
            <div className= "pizza-input">
                <h4>Pizza Specs</h4>
                <label id= "size-dropdown">Size
                <select value={values.size} name="size" onChange={onChange}>
                    <option value="">-- Select a Size --</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Party">Party</option>
                </select>
                </label>
            </div>
        </div>    
       <div className="form-group checkboxes">
           <h5>Toppings</h5>
            <label>
            Cheese
            <input
                type="checkbox"
                name="cheese"
                checked={values.cheese}
                onChange={onChange}
            />
            </label>

            <label>
            Marinara Sauce
            <input
                type="checkbox"
                name="sauce"
                checked={values.sauce}
                onChange={onChange}
            />
            </label>

            <label>
            Pepporoni
            <input
                type="checkbox"
                name="pepporoni"
                checked={values.pepporoni}
                onChange={onChange}
            />
            </label>

            <label>
            Jalapeno
            <input
                type="checkbox"
                name="jalapeno"
                checked={values.jalapeno}
                onChange={onChange}
            />
            </label>

            <h4>Special Requests</h4>
                <label id= "request-input">
                <input
                    type="text"
                    value={values.special}
                    onChange={onChange}
                    name="specialRequest"
                    placeholder="Anything else...?"
                    maxLength="300"
                />
                </label>

            <div className='submit'>
                <button id= "order-button" disabled={!values.name || !values.email || !values.size}>Add to Order</button>
            </div> 
        </div>
     </form>
  ) 
}
