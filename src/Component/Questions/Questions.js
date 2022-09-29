import React from 'react';
import './Questions.css'
const Questions = () => {
    return (
        <div className='container mx-auto my-3 lg:my-6'>
            <div className="collapse m-2 rounded-xl md:rounded-2xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-lg md:text-xl lg:text-4xl">
                    How dose react works?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                        Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.</p>
                </div>
            </div>
            <div className="collapse m-2 rounded-xl md:rounded-2xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-info text-white peer-checked:bg-secondary peer-checked:text-secondary-content text-lg md:text-xl lg:text-4xl">
                    What are the differences between props and state ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>PROPS</th>
                                        <th>STATE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>The Data is passed from one component to another.</td>
                                        <td>The Data is passed within the component only.</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>It is Immutable (cannot be modified).</td>
                                        <td>It is Mutable (can be modified).</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>Props can be used with state and functional components.</td>
                                        <td>State can be used only with the state components/class component (Before 16.0).</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>Props are read-only.</td>
                                        <td>State is both read and write.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </p>
                </div>
            </div>
            <div className="collapse m-2 rounded-xl md:rounded-2xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-warning text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-lg md:text-xl lg:text-4xl">
                    What kind of uses we can do with react <code>useEffect</code> hook?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
                        <li>Running once on mount: fetch API data.</li>
                        <li>Reading from local storage.</li>
                        <li>Running on state change: validating input field.</li>
                        <li>Running on state change: trigger animation on new array value.</li>
                        <li>Registering and de-registering event listeners</li>
                        <li>Running on props change: update paragraph list on fetched API data update.</li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Questions;