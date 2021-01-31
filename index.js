//sp.aboidrees.local

const credentials = {
  username: 'aboidreesaboidrees',
  password: 'P@ssw0rd',
  // domain: 'aboidrees.local',
};

import * as spauth from 'node-sp-auth';
import * as request from 'request-promise';

let url = 'http://sp.aboidrees.local';

let data = await spauth.getAuth(url, credentials)
let headers = data.headers;
headers['Accept'] = 'application/json;odata=verbose';
let requestOpts = data.options;
requestOpts.json = true;
requestOpts.headers = headers;
requestOpts.url = `${url}/_api/web/lists/getbytitle('Documents')`;


console.log(data);
// console.log(await request.get);
// console.log(await request.get(requestOpts));
/*
spauth
  .getAuth(url, credentials)
  .then((data) => {
    // console.log(data);
    let headers = data.headers;
    headers['Accept'] = 'application/json;odata=verbose';
    let requestOpts = data.options;
    requestOpts.json = true;
    requestOpts.headers = headers;
    requestOpts.url = `${url}/_api/web/lists/getbytitle('Documents')`;

    // console.log(requestOpts);

    async function test() {
      console.log();
    }


    // request.get(requestOpts)
    //   .then((response) => {
    //     console.log(response.d.Title);
    //   })
    //   .catch((error) => console.log(error));
  })
  .catch((error) => {
    console.log(error);
  });
*/