import React from 'react';

const Blog = () => {
    return (
            <div className='w-9/12 mx-auto'>
                <div className="card w-full bg-white shadow-xl mb-10">
                    <div className="card-body text-black">
                        <h2 className="card-title">Q. Difference between SQL and NoSQL</h2>
                        <p>Ans:</p>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr className=''>
                                        <th className=' overflow-x-auto text-white text-center text-lg'>SQL</th>
                                        <th className=' overflow-x-auto text-white text-center text-lg'>NoSQL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-white text-center'> SQL databases are table-based</td>
                                        <td className='text-white text-center'>NoSQL databases are document, key-value, graph, or wide-column stores</td>
                                    </tr>
                                    <tr>
                                        <td className='text-white text-center'>Relational database management system</td>
                                        <td className='text-white text-center'>Distribute database management system</td>
                                    </tr>
                                    <tr>
                                        <td className='text-white text-center'>Vertically Scalable</td>
                                        <td className='text-white text-center'>Horizontally Scalable</td>
                                    </tr>
                                    <tr>
                                        <td className='text-white text-center'>Can be used for complex queries</td>
                                        <td className='text-white text-center'>Not good for complex queries</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-white shadow-xl mb-10">
                    <div className="card-body text-black">
                        <h2 className="card-title">Q. What is JWT, and how does it work</h2>
                        <p>Ans: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                    </div>
                </div>

                <div className="card w-full bg-white shadow-xl mb-10">
                    <div className="card-body text-black">
                        <h2 className="card-title">Q. What is the difference between javascript and NodeJS</h2>
                        <p>Ans: <br /> JavaScript: <br /> # It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language. <br /> # It's a programming language, after all. Any browser with a competent browser engine will operate. <br /> # It's most commonly used on client-side servers.	 <br /> NodeJS: <br /> # It's a bridge, open-source Js runtime environment for executing Js on the server. <br /> # It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming. <br /> # It's mainly popular on the server-side.</p>
                    </div>
                </div>

                <div className="card w-full bg-white shadow-xl mb-10">
                    <div className="card-body text-black">
                        <h2 className="card-title">Q. How does NodeJS handle multiple requests at the same time</h2>
                        <p>Ans: At first user do an action then application start processing action, loop that and busy processing after that busy processing finally send result to user</p>
                    </div>
                </div>
                
            </div>
    );
};

export default Blog;