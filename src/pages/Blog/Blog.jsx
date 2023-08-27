import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div data-aos="flip-left" className='md:w-5/6 mx-auto my-20'>
            <h2 className='text-center text-5xl mb-10'>Answer of Questions</h2>
            <div>
                <div>
                    <h2 className='text-2xl'>Q1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p><strong>Ans:</strong> An access token is a credential that represents the authorization 
                    granted to a user or an application to access certain resources on behalf of the user. 
                    It is typically short-lived and provides limited permissions. Access tokens are used
                    to make authenticated requests to protected endpoints or APIs. They are sent with each API 
                    request as a proof of the user's authorization. Access tokens are often encoded and digitally
                     signed to ensure their integrity.
                    The purpose of an access token is to allow secure and efficient communication between the user's client (e.g., a web browser, mobile app) 
                    and the server hosting the resources or APIs. These tokens have a limited lifetime, which helps 
                    enhance security by reducing the exposure of sensitive credentials.
                    We can store accces token in our client side by two ways. One is storeing access toking in the localStorage of Bowser or, 
                    second one is to store it in 'HTTP Only Cockies'.
                    </p>
                </div>
                <div className='mt-6'>
                    <h2 className='text-2xl'>Q2. Compare SQL and NoSQL databases?</h2>
                    <p><strong>Ans:</strong> Comparison between SQL and NoSQL database is given below </p>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th></th>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th>Data Model</th>
                                <td>SQL databases follow a structured, tabular format with predefined schemas. 
                                    They use a relational model where data is organized into tables, rows, 
                                    and columns. Each row in a table represents a single record, and columns represent 
                                    attributes of that record.</td>
                                <td>NoSQL databases offer various data models such as key-value, document, column-family,
                                     and graph. These models are more flexible and allow for storing unstructured or semi-structured data.</td>
                            </tr>
                            <tr>
                                <th>Query Language</th>
                                <td>SQL databases use a standardized query language (SQL) to perform operations such as SELECT, INSERT, UPDATE, DELETE, 
                                    and JOIN on relational data. SQL provides powerful querying capabilities.</td>
                                <td>NoSQL databases use various query languages or APIs specific to their data model.
                                     These languages may not be as standardized as SQL.</td>
                            </tr>
                            <tr>
                                <th>Scalability</th>
                                <td>Traditional SQL databases are vertically scalable, meaning they are designed to handle increased load by adding more resources
                                     (CPU, memory) to a single server. They might have limitations when scaling horizontally.</td>
                                <td>NoSQL databases are often designed to be horizontally scalable, making them suitable for handling large amounts of data and 
                                    high traffic by distributing data across multiple servers.</td>
                            </tr>
                            <tr>
                                <th>Data Relationships</th>
                                <td>SQL databases are well-suited for applications with complex relationships between data entities. 
                                    JOIN operations allow data from multiple tables to be combined in queries.</td>
                                <td>NoSQL databases can handle relationships but may not be as optimized for complex JOIN operations. Some NoSQL databases support graph
                                     databases for efficiently querying relationships.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mt-6'>
                    <h2 className='text-2xl'>Q3. What is express js? What is Nest JS?</h2>
                    <p><strong>Ans:</strong> Express.js, commonly referred to as Express, is a popular and widely
                     used web application framework for Node.js. It provides a simple way of building and managing web applications,
                      APIs, and other server-side applications. Some of the key features of ExpressJS are: Routing, Middleware, Request and Response
                      RESTAPI's etc.
                    </p>
                    <p>NestJS is a powerful and popular open-source framework for building server-side applications, and 
                        web application and APIs using TypeScript and Node.js. NestJS is built on top of express.js. Some of the key 
                        features of NestJS are: Modularity, Decorators, Dependency Injection, Services, GraphQL Integration etc.
                    </p>
                </div>
                <div className='mt-6'>
                    <h2 className='text-2xl'>Q4. What is MongoDB aggregate and how does it work (google it)?</h2>
                    <p><strong>Ans:</strong> MongoDB aggregate is a  way of processing a large number of documents
                     in a collection by means of passing them through different stages. The stages make up what is
                      known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                      There is no specific limit of stages in the pipeline to process data. 
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;