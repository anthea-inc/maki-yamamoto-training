const taskX = new Promise((resolve) => setTimeout(() => resolve("Xが先に終わった！"), 500));
const taskY = new Promise((resolve) => setTimeout(() => resolve("Yが先に終わった！"), 800));
const taskZ = new Promise((resolve, reject) => setTimeout(() => reject("Zが先に失敗！"), 300));

Promise.race([taskX, taskY, taskZ])
  .then((result) => {
    console.log("最初に完了したタスク:", result);
  })
  .catch((err) => {
    console.error("最初に失敗/完了したタスク:", err);
  });

/*
  function asyncTask(name, duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "TaskB") {
        reject(new Error(`${name}でエラーが発生`));
      } else {
        resolve(`${name}完了 (所要時間: ${duration}ms)`);
      }
    }, duration);
  });
}

const taskA = asyncTask("TaskA", 1000);
const taskB = asyncTask("TaskB", 2000); // これが失敗する
const taskC = asyncTask("TaskC", 1500);

Promise.all([taskA, taskB, taskC])
  .then((results) => {
    console.log("全てのタスクが完了:", results);
  })
  .catch((error) => {
    console.error("タスクのいずれかが失敗:", error.message);
  });
*/
