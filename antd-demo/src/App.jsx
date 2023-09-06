import { Form, Input, Radio, Checkbox, Select, Button, DatePicker } from "antd";

const App = () => {
  // Define the options for the country select
  const countryOptions = [
    { value: "in", label: "India" },
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
  ];
  const languageOptions = [
    { value: "hn", label: "Hindi" },
    { value: "en", label: "English" },
    { value: "tm", label: "Tamil" },
    { value: "tl", label: "Telugu" },
  ];

  // Define the initial values for the form fields
  const initialValues = {
    name: "",
    email: "",
    address: "",
    password: "",
    gender: "",
    file: null,
    interests: [],
    country: "",
  };

  const getFormData = (e)=>{
    console.log(e);
  }

  return (
    <Form
      // Set the initial values for the form fields
      initialValues={initialValues}
      // Set the enctype attribute for file upload
      encType="multipart/form-data"
      onFinish={getFormData} //onFinish gives the submitted data
    >
      <fieldset>
        <legend>Personal Information</legend>
        <ol>
          <li>
            <Form.Item
              // Set the name of the field in the form data
              name="name"
              // Set the label of the field
              label="Name:"
              // Set the validation rules for the field
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                // Set the id of the input element
                id="name"
                // Set the placeholder of the input element
                placeholder="Enter your name"
                // Set the autocomplete attribute of the input element
                autoComplete="name"
                allowClear
              />
            </Form.Item>
          </li>
          <li>
            <Form.Item
              name="email"
              label="Email:"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                id="email"
                placeholder="Enter your email"
                autoComplete="email"
                allowClear
              />
            </Form.Item>
          </li>
          <li>
            <Form.Item
              name="dob"
              label="Date of birth:"
              rules={[
                { required: true, message: "Please enter your date of birth" },
              ]}
            >
              <DatePicker
                id="dob"
                placeholder="DD-MM-YYYY"
                format={"DD-MM-YYYY"}
              />
            </Form.Item>
          </li>
          <li>
            <Form.Item
              name="address"
              label="Address:"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input.TextArea
                id="address"
                rows={4}
                placeholder="Enter your address"
                autoComplete="street-address"
                allowClear
              />
            </Form.Item>
          </li>
          <li>
            <Form.Item
              name="password"
              label="Password:"
              rules={[{ required: true, message: "Please enter a password" }]}
            >
              <Input.Password
                id="password"
                placeholder="Password"
                autoComplete="off"
                minLength={"6"}
              />
            </Form.Item>
          </li>
          <li>
            <Form.Item
              name="gender"
              label="Gender:"
              rules={[{ required: true, message: "Please select your gender" }]}
            >
              <Radio.Group id="gender">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            </Form.Item>
          </li>
          <li>
            <Form.Item name="file" label="Upload a File:">
              <Input type="file" id="file" />
            </Form.Item>
          </li>
        </ol>
      </fieldset>
      <fieldset>
        <legend>Additional Information</legend>
        <ul>
          <li>
            <Form.Item name="interests" label="Interests:">
              <Checkbox.Group id="interests">
                <Checkbox value="Reading">Reading</Checkbox>
                <Checkbox value="Traveling">Traveling</Checkbox>
                <Checkbox value="Cooking">Cooking</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </li>
          <li>
            <Form.Item
              name="country"
              label="Country:"
              rules={[
                { required: true, message: "Please select your country" },
              ]}
            >
              <Select
                id="country"
                options={countryOptions}
                placeholder="Select a country"
              />
            </Form.Item>
          </li>
          <li>
            <Form.Item
              name="language"
              label="Language knows:"
              rules={[
                {
                  required: true,
                  message: "Please select atleast one language",
                },
              ]}
            >
              {/* mode="multiple allows us to select more than one item/option" */}
              <Select
                id="language"
                options={languageOptions}
                mode="multiple"                
                placeholder="Select known language(s)"
              />
            </Form.Item>
          </li>
        </ul>
      </fieldset>
      <Form.Item>
        {/* block sets full length of button */}
        <Button block type="primary" htmlType="submit"> 
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
