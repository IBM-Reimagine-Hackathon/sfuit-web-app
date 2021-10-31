function urlBase64ToUint8Array(base64String: String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const publicVapidKey = `BBKlW6qfK9gBR7UFDvWr_aw2uGZ6BBB7ZrU5p_1JMR_e13Lw3T6t4DPG8aK8ocRnpZ1vUxuLSkLqvFcQ5JHEQ4o`;

export function register() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then(async (reg) => {
        reg.update();
        const ss = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
        });
        console.log(ss);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/subscribe`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subscription: ss,
            uid: JSON.parse(localStorage.getItem("sfuit")!)._id,
          }),
        }).then(
          (res) => console.log("Successfully Registered"),
          (err) => console.log("ERROR99", err)
        );
        // })
      })

      .catch((error) => {
        console.log("Registration failed with " + error);
      });
  }
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
