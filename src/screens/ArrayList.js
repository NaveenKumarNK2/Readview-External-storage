import RNFetchBlop from 'rn-fetch-blob';

RNFetchBlob.fs.ls('file:///storage/emulated/0/Images/')
    .then((files) => {
        console.log(files)
    })