// Simulating a function that fetches a user profile from the database
function fetchUserProfileFromDatabase(userId) {
    // Simulate a database response
    // For simplicity, let's assume the response includes various user details
    return {
        id: userId,
        name: 'John Doe',
        email: 'john.doe@example.com',
        // Other user details...
    };
}

// Simulating a complex function that processes user data
function processUserData(user) {
    if (!user || !user.name || !user.email) {
        throw new Error('Invalid user profile. Name and email are required.');
    }

    // Simulating a complex processing logic
    const processedData = {
        userId: user.id,
        processedName: user.name.toUpperCase(),
        processedEmail: user.email.toLowerCase(),
        // Other processed data...
    };

    return processedData;
}

// Simulating a user ID to fetch from the database
const userId = 123;

// Fetching the user profile from the database and processing it
try {
    const userProfileFromDatabase = fetchUserProfileFromDatabase(userId);

    // Using nullish coalescing operator to handle null or undefined database response
    const processedUser = processUserData(userProfileFromDatabase ?? {
        id: 0,
        name: 'Guest',
        email: 'guest@example.com',
        // Default values for other user details...
    });

    console.log(processedUser);
} catch (error) {
    console.error(error.message);
}
