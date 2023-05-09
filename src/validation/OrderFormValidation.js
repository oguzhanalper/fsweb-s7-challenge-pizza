import * as Yup from "yup";
export const orderFormSchema = Yup.object().shape({
  sizeDropdown: Yup.string().required("You must choose a size."),
  selectedToppings: Yup.array()
    .of(Yup.string())
    .required("You must select max 6 toppings")
    .min(2, "you can choose at least 2 toppings")
    .max(6, "You can choose max 6 toppings"),

  sauce: Yup.string().required("You must choose a sauce."),

  glutenFreeCrust: Yup.string(),
  specialText: Yup.string().max(
    100,
    "Your message must be less than 100 characters."
  ),

  name: Yup.string()
    .required("You must enter your full name.")
    .min(3, "Enter a valid name.")
    .max(30, "Name must be less than 30 characters."),
  address: Yup.string()
    .required("You must enter your address for delivering your order")
    .min(10, "You must enter a valid address.")
    .max(60, "Address must be shorter than 70 characters."),
  orderQuantity: Yup.number("Min. order quantity is 1.")
    .required("Min. order quantity is 1.")
    .min(1, "Min. order quantity is 1.")
    .max(10, "Max. order quantity is 10.")
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable(),
});
