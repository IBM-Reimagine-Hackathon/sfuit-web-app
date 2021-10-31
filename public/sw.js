self.addEventListener("push", (event) => {
  const data = event.data.json();
  console.log(event.data);
  self.registration.showNotification(data.title, {
    body: data.description,
  });
});
