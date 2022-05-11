import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="container">
            <h2>Difference between javascript and nodejs</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Javascript</th>
                  <th>NodeJS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                  <td>NodeJS is a Javascript runtime environment.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Javascript can only be run in the browsers.</td>
                  <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>It is basically used on the client-side.</td>
                  <td>It is mostly used on the server-side.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                  <td>Nodejs does not have capability to add HTML tags.</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>
                  <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Javascript is used in frontend development.</td>
                  <td>Nodejs is used in server-side development.</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                  <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
                  <td>Nodejs is written in C, C++ and Javascript.</td>
                </tr>
              </tbody>
            </Table>
              <h3> Differences between sql and nosql databases.</h3>
              <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>SQL</th>
                  <th>NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>SQL is generally used in Relational Database Management System.</td>
                  <td>NoSQL is used for non-relational, distributed database system.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Structured data can be stored in tables.</td>
                  <td>Using JSON data, un-structured data can be stored.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>The Schemas are Static.</td>
                  <td>The Schemas are dynamic.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Schemas are rigid and bound to relationships. </td>
                  <td>Schemas are non-rigid, they are flexible.</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Helpful to design complex queries. </td>
                  <td>No interface to prepare complex query.</td>
                </tr>
              </tbody>
            </Table>
            <h3>What is the purpose of jwt and how does it work</h3>
            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            <p>
JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. <br />

Once decoded, you will get two JSON strings: <br />

1. The header and the payload. <br />
2. The signature. <br />
The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. <br /> 

The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. <br />

There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. <br />

The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. <br />

JWT Example: OAuth Bearer Tokens
A common way to use JWTs is as OAuth bearer tokens. In this example, an authorization server creates a JWT at the request of a client and signs it so that it cannot be altered by any other party. The client will then send this JWT with its request to a REST API. The REST API will verify that the JWT’s signature matches its payload and header to determine that the JWT is valid. When the REST API has verified the JWT, it can use the claims to either grant or deny the client’s request. <br />

In simpler terms, you can think of a JWT bearer token as an identity badge to get into a secured building. The badge comes with special permissions (the claims); that is, it may grant access to only select areas of the building. The authorization server in this analogy is the reception desk — or the issuer of the badge. And to verify that the badge is valid, the company logo is printed on it, similar to the signature of the JWT. If the badge holder attempts to access a restricted area, the permissions on the badge determine whether or not they can access the area, similar to the claims in a JWT. <br />

Why Use JWT?
In short, JWTs are used as a secure way to authenticate users and share information.

Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.

Not all signing algorithms are created equal though. For example, some signing algorithms use a secret value that is shared between the issuer and the party that verifies the JWT. Other algorithms use a public and private key. The private key is known only to the issuer, while the public key can be widely distributed. The public key can be used to verify the signature, but only the private key can be used to create the signature. This is more secure than a shared secret because the private key only needs to exist in one place.

Because of this, the server does not need to keep a database with the information needed to identify the user. For developers, this is great news — the server that issues the JWT and the server that validates it do not have to be the same. </p>
        </div>
    );
};

export default Blogs;