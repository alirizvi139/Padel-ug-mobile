/**
 * Basic GET API call
 */
export async function getApiCall(url: string) {
  try {
    console.log("url ",url);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("response ",response);

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }

    return await response.json();
  } catch (error) {
    throw error;
  }
}