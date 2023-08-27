import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = ReturnType<typeof getUser>;
type ReturnValueNotPromise = Awaited<ReturnValue>

type tests = [
  Expect<Equal<ReturnValueNotPromise, { id: string; name: string; email: string }>>,
];
