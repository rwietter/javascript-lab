class Timeout extends Error { }

const request = (nest, target, type, content) => new Promise((resolve, reject) => {
  let done = false;
  const attempt = (n) => {
    nest.send(target, type, content, ((failed, value) => {
      done = true;
      if (failed) reject(failed);
      else resolve(value);
    }));
    setTimeout(() => {
      if (done) return;
      if (n < 3) attempt(n + 1);
      else reject(new Timeout('Timed out'));
    }, 200);
  };
  attempt(1);
});
