// Function to fetch the age from the API based on the provided name.
export async function calculateAge(name) {
  try {
    const response = await fetch(`https://api.agify.io?name=${name}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for ${name}`);
    }
    const data = await response.json();
    return data.age;
  } catch (error) {
    console.error(error);
    return null;
  }
}
