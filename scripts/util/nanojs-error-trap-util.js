'use strict';
// modules
const bananojs = require('@bananocoin/bananojs');

const mainConsoleLib = require('console');

// constants
const mainConsole = new mainConsoleLib.Console(process.stdout, process.stderr);
mainConsole.debug = () => {};

const ERROR_URL = 'https://nanojs.coranos.cc/api';

// variables
let url = ERROR_URL;

// functions
const getErrorUrl = () => {
  return ERROR_URL;
};

const isErrorUrl = () => {
  return url == ERROR_URL;
};

const setNanodeApiUrl = (rpcUrl) => {
  if (rpcUrl) {
    url = rpcUrl;
    return bananojs.setBananodeApiUrl(rpcUrl);
  } else {
    throw Error('rpcUrl is undefined or null.');
  }
};

const getAccountHistory = async (account, count, head, raw) => {
  try {
    if (isErrorUrl()) {
      throw Error('getAccountHistory');
    }
    return await bananojs.getAccountHistory(account, count, head, raw);
  } catch (error) {
    alert('error getting account history:' + error.message);
    return [];
  }
};

const getPrivateKey = (seed, seedIx) => {
  try {
    if (isErrorUrl()) {
      throw Error('getPrivateKey');
    }
    // mainConsole.trace('getting account history', 'seedIx', seedIx);
    return bananojs.getPrivateKey(seed, seedIx);
  } catch (error) {
    // mainConsole.trace('error getting account history', 'seedIx', seedIx, error.message);
    alert('error getting account history:' + error.message);
    return undefined;
  }
};

const getPublicKey = (privateKey) => {
  return bananojs.getPublicKey(privateKey);
};

const getAccount = (publicKey) => {
  return bananojs.getNanoAccount(publicKey, bananojs);
};

const getRawStrFromNanoStr = (amountNanos) => {
  return bananojs.getRawStrFromNanoStr(amountNanos);
};

const getAccountsPending = async (account, count, source) => {
  try {
    if (isErrorUrl()) {
      throw Error('getAccountsPending');
    }
    return await bananojs.getAccountsPending(account, count, source);
  } catch (error) {
    alert('error getting account pending:' + error.message);
    return [];
  }
};

const getAccountPublicKey = (account) => {
  return bananojs.getAccountPublicKey(account);
};

const getCamoAccount = (camoPublicKey) => {
  return bananojs.getCamoAccount(camoPublicKey);
};

const getCamoPublicKey = (privateKey) => {
  return bananojs.getCamoPublicKey(privateKey);
};

const changeRepresentativeForSeed = async (seed, seedIx, representative) => {
  try {
    if (isErrorUrl()) {
      throw Error('changeNanoRepresentativeForSeed');
    }
    return await bananojs.changeNanoRepresentativeForSeed(seed, seedIx, representative);
  } catch (error) {
    alert('error changing rep:' + error.message);
    return;
  }
};

const camoSendWithdrawalFromSeed = async (seed, sendFromSeedIx, sendToAccount, sendAmount) => {
  try {
    if (isErrorUrl()) {
      throw Error('camoSendWithdrawalFromSeed');
    }
    return await bananojs.camoNanoSendWithdrawalFromSeed(seed, sendFromSeedIx, sendToAccount, sendAmount);
  } catch (error) {
    alert('error camo send withdrawal:' + error.message);
    return;
  }
};

const sendWithdrawalFromSeed = async (seed, sendFromSeedIx, sendToAccount, sendAmount) => {
  try {
    if (isErrorUrl()) {
      throw Error('sendWithdrawalFromSeed');
    }
    return await bananojs.sendNanoWithdrawalFromSeed(seed, sendFromSeedIx, sendToAccount, sendAmount);
  } catch (error) {
    alert('error send withdrawal:' + error.message);
    return;
  }
};

const getNanoPartsFromRaw = (amount) => {
  return bananojs.getNanoPartsFromRaw(amount);
};

const getAccountInfo = async (account, representativeFlag) => {
  try {
    if (isErrorUrl()) {
      throw Error('getAccountInfo');
    }
    return await bananojs.getAccountInfo(account, representativeFlag);
  } catch (error) {
    alert('error:' + error.message);
    const retval = {};
    retval.error = 'Error Testnet Selected';
    return retval;
  };
};

const getBlockCount = async () => {
  try {
    if (isErrorUrl()) {
      throw Error('getBlockCount');
    }
    return await bananojs.getBlockCount();
  } catch (error) {
    alert('error get block count:' + error.message);
    const retval = {};
    retval.count = -1;
    return retval;
  }
};

const getCamoAccountValidationInfo = (camoAccount) => {
  return bananojs.getCamoAccountValidationInfo(camoAccount);
};

const getAccountValidationInfo = (banAccount) => {
  return bananojs.getNanoAccountValidationInfo(banAccount);
};

const getCamoSharedAccountData = async (seed, seedIx, sendToAccount, sharedSeedIx) => {
  try {
    if (isErrorUrl()) {
      throw Error('getCamoSharedAccountData');
    }
    return await bananojs.getCamoNanoSharedAccountData(seed, seedIx, sendToAccount, sharedSeedIx);
  } catch (error) {
    alert('error getting camo shared acount data:' + error.message);
    return;
  }
};

const camoGetAccountsPending = async (seed, seedIx, sendToAccount, sharedSeedIx, count) => {
  try {
    if (isErrorUrl()) {
      throw Error('camoGetAccountsPending');
    }
    return await bananojs.camoNanoGetAccountsPending(seed, seedIx, sendToAccount, sharedSeedIx, count);
  } catch (error) {
    alert('error get account pending:' + error.message);
    return;
  }
};

const receiveCamoDepositsForSeed = async (seed, seedIx, sendToAccount, sharedSeedIx, hash) => {
  try {
    if (isErrorUrl()) {
      throw Error('receiveCamoDepositsForSeed');
    }
    return await bananojs.receiveCamoNanoDepositsForSeed(seed, seedIx, sendToAccount, sharedSeedIx, hash);
  } catch (error) {
    alert('error receive camo deposit:' + error.message);
    return;
  }
};

const receiveDepositsForSeed = async (seed, seedIx, representative, hash) => {
  try {
    if (isErrorUrl()) {
      throw Error('receiveDepositsForSeed');
    }
    return await bananojs.receiveNanoDepositsForSeed(seed, seedIx, representative, hash);
  } catch (error) {
    alert('error receive deposit:' + error.message);
    return;
  }
};

exports.getRawStrFromNanoStr = getRawStrFromNanoStr;
exports.setNanodeApiUrl = setNanodeApiUrl;
exports.getAccountHistory = getAccountHistory;
exports.getAccountsPending = getAccountsPending;
exports.getPrivateKey = getPrivateKey;
exports.getPublicKey = getPublicKey;
exports.getAccount = getAccount;
exports.getErrorUrl = getErrorUrl;
exports.getCamoAccountValidationInfo = getCamoAccountValidationInfo;
exports.getAccountValidationInfo = getAccountValidationInfo;
exports.getAccountPublicKey = getAccountPublicKey;
exports.getCamoAccount = getCamoAccount;
exports.getCamoPublicKey = getCamoPublicKey;
exports.getAccountInfo = getAccountInfo;
exports.getBlockCount = getBlockCount;
exports.getNanoPartsFromRaw = getNanoPartsFromRaw;
exports.changeRepresentativeForSeed = changeRepresentativeForSeed;
exports.camoSendWithdrawalFromSeed = camoSendWithdrawalFromSeed;
exports.sendWithdrawalFromSeed = sendWithdrawalFromSeed;
exports.getCamoSharedAccountData = getCamoSharedAccountData;
exports.camoGetAccountsPending = camoGetAccountsPending;
exports.receiveCamoDepositsForSeed = receiveCamoDepositsForSeed;
exports.receiveDepositsForSeed = receiveDepositsForSeed;
