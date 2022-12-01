import React from "react";

const Blog = () => {
  return (
    <div>
      <div className=" mb-3 border-2 p-4">
        <h1 className="text-2xl mb-2">
          {" "}
          <span className="font-bold">Question: 1</span> what are the different
          ways to manage a state in a react application?
        </h1>
        <p>
          <span className="font-bold">Answer: </span>
          The Four Kinds of React State to Manage When we talk about state in
          our applications, it’s important to be clear about what types of state
          actually matter. There are four main types of state you need to
          properly manage in your React apps:
          <ol>
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </ol>
        </p>
      </div>
      <div className="mb-3 border-2 p-4">
        <h1 className="text-2xl mb-2">
          {" "}
          <span className="font-bold">Question:2</span> how does prototypical
          inheritance work?
        </h1>
        <p>
          <span className="font-bold">Answer: </span>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in
          modern language, it is being set using __proto__.
        </p>
      </div>
      <div className="mb-3 border-2 p-4">
        <h1 className="text-2xl mb-2">
          {" "}
          <span className="font-bold">Question:3</span>what is a unit test? Why
          should we write unit test?
        </h1>
        <p>
          <span className="font-bold">Answer: </span>A unit test verifies the
          behavior of a unit of software in the system. It verifies whether a
          small and isolated piece of the codebase called “unit” behaves as the
          developer intended. Unit tests verify the smallest parts or components
          of an application by comparing their actual behavior with the expected
          behavior in complete isolation. Here, “complete isolation” means that,
          during unit testing, devs do not connect the application with external
          dependencies such as databases, the filesystem, or HTTP services. This
          allows unit tests to be fast and stable since they won’t fail due to
          problems integrating with those external services. <br />
          Usually, developers write unit tests first, then write the software
          code. This approach is known as test-driven development (TDD). In TDD,
          the requirements are turned into specific test cases, then the
          software is improved to pass the new tests. In the case of unit tests,
          it allows for the modification of code without affecting the
          functionality of other units or the software in its entirety. This
          makes the job easier for developers as the bugs are easy to locate at
          this stage, which saves time and money.
        </p>
      </div>
      <div className="mb-3 border-2 p-4">
        <h1 className="text-2xl mb-2">
          {" "}
          <span className="font-bold">Question:4</span>react vs angular vs vue
        </h1>
        <p>
          <span className="font-bold">Answer: </span>
          <strong>Angular vs React</strong> <br />
          React often requires extra modules and components, which keeps the
          core library small, but means there’s extra work involved when
          incorporating outside tools. Angular, on the other hand, is more of a
          full-fledged solution that doesn’t require extras like React often
          does, though it does have a steeper learning curve for its core
          compared to React. React is more suitable for intermediate to advanced
          JavaScript developers who are familiar with concepts from ES6 and up,
          while Angular favors those same developers who are also familiar with
          TypeScript. <br />
          <strong>React vs Vue</strong> <br />
          Vue is generally more suited to smaller, less complex apps and is
          easier to learn from scratch compared to React. Vue can be easier to
          integrate into new or existing projects and many feel its use of HTML
          templates along with JSX is an advantage. Overall, Vue might be the
          best choice if you’re a newer developer and not as familiar with
          advanced JavaScript concepts, while React is quite well suited for
          experienced programmers and developers who have worked with
          object-oriented JavaScript, functional JavaScript, and similar
          concepts.
        </p>
      </div>
    </div>
  );
};

export default Blog;
