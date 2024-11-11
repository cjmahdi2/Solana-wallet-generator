const fs = require('fs');
const readline = require('readline');
const { Keypair } = require('@solana/web3.js');
const bs58 = require('bs58');
const path = require('path');
const chalk = require('chalk');

// ???? ???? ?????????? ???????
const folderPath = path.join(__dirname, 'walletFiles');

// ??????? ???? ????????? ???????
let counter = 1;

// ??? ???? ???? ?????? ?? ?? ??????
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// ???? ???? ?????? ??????? ? ????? ?? ????
function incrementCounter() {
  const counterFilePath = path.join(folderPath, 'counter.json');
  if (fs.existsSync(counterFilePath)) {
    const counterData = JSON.parse(fs.readFileSync(counterFilePath, 'utf-8'));
    counter = counterData.counter + 1;
  }
  fs.writeFileSync(counterFilePath, JSON.stringify({ counter }));
}

incrementCounter();  // ?? ??? ????? ??????? ????? ?? ??? ????? ??

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(chalk.cyan('How many wallets do you want to make? '), async (answer) => {
  const count = parseInt(answer);
  if (isNaN(count) || count <= 0) {
    console.log(chalk.red('Please enter a valid number.'));
    rl.close();
    return;
  }

  const privateKeys = [];
  const walletAddresses = [];

  for (let i = 0; i < count; i++) {
    const keypair = Keypair.generate();
    const privateKeyBase58 = bs58.encode(keypair.secretKey);
    privateKeys.push(`"${privateKeyBase58}"`);
    walletAddresses.push(`"${keypair.publicKey.toString()}"`);
  }

  const privateKeysContent = `module.exports = {\n  privateKeys: [\n    ${privateKeys.join(",\n    ")}\n  ]\n};\n`;
  const walletAddressesContent = `module.exports = {\n  walletAddresses: [\n    ${walletAddresses.join(",\n    ")}\n  ]\n};\n`;

  // ??????? ?? ??????? ???? ????????? ???????
  const privateKeysFileName = path.join(folderPath, `privateKeys_${counter}.js`);
  const walletAddressesFileName = path.join(folderPath, `walletAddresses_${counter}.js`);

  fs.writeFile(privateKeysFileName, privateKeysContent, (err) => {
    if (err) {
      console.error(chalk.red('Error saving private keys file:', err));
    } else {
      console.log(chalk.green(`Private keys saved as ${privateKeysFileName}.`));
    }
  });

  fs.writeFile(walletAddressesFileName, walletAddressesContent, (err) => {
    if (err) {
      console.error(chalk.red('Error saving wallet addresses file:', err));
    } else {
      console.log(chalk.green(`Wallet addresses saved as ${walletAddressesFileName}.`));
    }
    rl.close();
  });
});
