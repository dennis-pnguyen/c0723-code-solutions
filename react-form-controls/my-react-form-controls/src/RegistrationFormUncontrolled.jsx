export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log('uncontrolled form:', formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Username: <input name="userName" />
      </label>
      <label>
        Password: <input name="password" type="password" />
        <button type="submit">Sign Up</button>
      </label>
    </form>
  );
}
