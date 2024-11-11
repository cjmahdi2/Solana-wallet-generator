# Solana Wallet Generator


**1. Install Node.js And npm:**
```
sudo apt update && apt upgrade -y
sudo apt remove nodejs
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
source ~/.bashrc
nvm install 22.9.0
nvm use 22.9.0
nvm alias default 22.9.0
```
**2. Install Git**
```
sudo apt update
sudo apt install git
```
**3. Install Screen**
```
sudo apt update
sudo apt install screen
```
**4.Check the installation:**
```
node -v
npm -v
```
You must use Node version 15 or higher

**5.Install dependencies:**
```
npm install @solana/web3.js bs58 chalk@4
```

## Installation Script:

1. Clone the repository:

   ```bash
   git clone https://github.com/cjmahdi2/Sonic_Odyssey_Bot.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Sonic_Odyssey_Bot
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Prepare input files:

   - Create `nano privateKeys.json` with an array of private keys (base58 encoded).


   Example `privateKeys.json`:
   ```json
   [
     "private_key_1",
     "private_key_2",
     "private_key_3"
   ]
   ```
After completing the privateKeys.json file, press Ctrl + x and then Ctrl + y and then Enter to save.

## Usage (Manual):

**Creating a Screen:**
```
screen -S Sonic_Bot
```
Run the bot using Node.js:

```bash
npm start && npm run claim
```

For 100 transactions use: `npm start` And For "Daily Check" and "Climb Box" and "Open box" use: `npm run claim`

Then take Ctrl + A then D to leave the Screen

## Tip (Auto):
If you want to set up your Bot to run every day at 2:00 AM server time:

1. Edit the Cron File:
```
crontab -e
```
2. Add the following line to the crontab file:
```
0 2 * * * cd /root/Sonic_Odyssey_Bot && node index.js && node claim.js
```
After completing the Cron File, press Ctrl + x and then Ctrl + y and then Enter to save.

## Donations

If you would like to support the development of this project, you can make a donation using the following addresses:

- **EVM**: `0x83F129E662B21cF035bc9510f65eb29C75b69155`


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
