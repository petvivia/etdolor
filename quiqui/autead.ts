
const {deploy} = require("hardhat-deploy");

async function main() {
  await deploy("Greeter", {
    // ...
  });
  const greeter = await ethers.getContract("Greeter");
  const resetTx = await greeter.reset();
  await resetTx.wait();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

