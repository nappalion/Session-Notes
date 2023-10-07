document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");
  const nameInput = document.getElementById("nameInput");
  const homeworkInput = document.getElementById("homeworkInput");
  const bodyInput = document.getElementById("bodyInput");
  const currModuleInput = document.getElementById("currModuleInput");
  const outputTextarea = document.getElementById("output");
  const didHomeworkInput = document.getElementById("didHomeworkInput");

  button.addEventListener("click", function () {
    const name = nameInput.value;
    const homework = homeworkInput.value;
    const currModule = currModuleInput.value;
    const body = bodyInput.value;
    const didHomework = didHomeworkInput.checked;

    let homeworkCheckText = didHomework
      ? "did a great job working on the homework"
      : "didn't work on the homework";

    const outputText = `
📚 **Homework check**: ${name} ${homeworkCheckText}.

⏰ **Our class today**: During the session today, we were able to ${body}

Before the session ended, we discussed what ${name} could work on for homework.

Overall, ${name} did a fantastic job with the projects today, and I look forward to completing the ${currModule} module together. I’ll see you next week!

-----

✏️️ **Assignment**: For this week’s assignment, ${name} should work on ${homework}.
`;

    outputTextarea.value = outputText;
  });
});
