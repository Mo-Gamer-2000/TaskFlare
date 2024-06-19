// Import the UserForm component from the specified path
import UserForm from "../(components)/UserForm";

// Define the CreateUser component
const CreateUser = () => {
  return (
    // Container div for the CreateUser page
    <div>
      <h1 className="text-purple-accent">
        {/* Render the UserForm component */}
        <UserForm />
      </h1>
    </div>
  );
};

// Export the CreateUser component for use in other parts of the application
export default CreateUser;
