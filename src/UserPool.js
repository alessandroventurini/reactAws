import {CognitoUserPool} from 'amazon-cognito-identity-js';


const poolData = {
    UserPoolId: 'us-east-1_olFE4guEG',
    ClientId: '2d2qm5ei1259cs3s6dkclgve3q'
};

export default new CognitoUserPool(poolData);