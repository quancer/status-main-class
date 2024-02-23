import { useEffect, useState } from "react";

export default function Home() {
  const [student, setStudent] = useState([]);
  const col1 = student.filter((e) => e.id < 9);
  const col2 = student.filter((e) => e.id >= 9 && e.id < 21);
  const col3 = student.filter((e) => e.id > 20);
  console.log(col1, col2, col3);
  useEffect(() => {
    async function fet() {
      const res = await fetch("http://localhost:4000/api/students");
      const data = await res.json();
      console.log(data.students);
      setStudent(data.students);
    }
    fet();
  }, []);
  async function changeStateHandler(user) {
    let changeColor;
    if (user.state == "Done") changeColor = "bg-green-500";
    if (user.state == "Processing") changeColor = "bg-yellow-500";
    if (user.state == "Help") changeColor = "bg-red-500";
    const res = await fetch("http://localhost:4000/api/changeState", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
        state: user.state,
        changeColor: changeColor,
      }),
    });
    const data = await res.json();
    console.log(data);
    setStudent(data.users);
  }
  // useEffect(() => {
  //   fetch("http://localhost:4000/api/students")
  //     .then((response) => response.json())
  //     .then(({ students }) => setStudents([...students]));
  // }, []);
  return (
    <div className="flex justify-center items-center p-20">
      <div className="max-w-[1200px] flex flex-col justify-center items-center gap-10">
        <div className="">
          <h1 className="text-lg">Leap1E-class-status</h1>
        </div>
        <div className="flex flex-wrap text-sm items-start gap-5">
          <div className="grid grid-cols-2 gap-4 w-[30%]">
            {col1?.map((e) => {
              return (
                <div
                  className="flex flex-col gap-4 border items-center p-2"
                  key={e.id}
                >
                  <div className="flex justify-center">
                    <svg
                      className="w-[30%]"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <g data-name="1" id="_1">
                        <path d="M413,353.15H97.24a43.15,43.15,0,0,1-43.11-43.1V100.36A43.16,43.16,0,0,1,97.24,57.25H413a43.15,43.15,0,0,1,43.1,43.11V310.05A43.14,43.14,0,0,1,413,353.15ZM97.24,87.25a13.12,13.12,0,0,0-13.11,13.11V310.05a13.12,13.12,0,0,0,13.11,13.1H413a13.12,13.12,0,0,0,13.1-13.1V100.36A13.12,13.12,0,0,0,413,87.25Z" />
                        <path d="M324.13,405.65h-138a15,15,0,0,1-14-20.34l20-52.5a15,15,0,0,1,14-9.66h98a15,15,0,0,1,14,9.66l20,52.5a15,15,0,0,1-14,20.34Zm-116.23-30h94.46l-8.57-22.5H216.48Z" />
                        <path d="M354.61,405.65h-199a15,15,0,1,1,0-30h199a15,15,0,0,1,0,30Z" />
                        <path d="M441.13,303.66h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-between w-full">
                    <p>{e.name}</p>
                    <p
                      className={e.changeColor + " p-1 rounded-md text-cyan-50"}
                    >
                      {e.state}
                    </p>
                  </div>

                  <div className="flex flex-col bg-slate-200 items-center gap-2 p-1">
                    <p>Change state</p>
                    <div className="flex w-full flex-wrap text-xs gap-1 justify-center p-2">
                      <button
                        onClick={() =>
                          changeStateHandler({ state: "Done", id: e.id })
                        }
                        className="cursor-pointer btn p-1 rounded-md bg-green-500	"
                      >
                        Done
                      </button>
                      <button
                        onClick={() =>
                          changeStateHandler({ state: "Processing", id: e.id })
                        }
                        className="cursor-pointer	btn p-1 rounded-md bg-yellow-500"
                      >
                        Processing
                      </button>
                      <button
                        onClick={() =>
                          changeStateHandler({ state: "Help", id: e.id })
                        }
                        className="cursor-pointer btn p-1 rounded-md bg-red-500	"
                      >
                        Help
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-4 w-[30%]">
            {col2?.map((e) => {
              return (
                <div
                  className="flex flex-col gap-4 border items-center p-2"
                  key={e.id}
                >
                  <div className="flex justify-center">
                    <svg
                      className="w-[30%]"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <g data-name="1" id="_1">
                        <path d="M413,353.15H97.24a43.15,43.15,0,0,1-43.11-43.1V100.36A43.16,43.16,0,0,1,97.24,57.25H413a43.15,43.15,0,0,1,43.1,43.11V310.05A43.14,43.14,0,0,1,413,353.15ZM97.24,87.25a13.12,13.12,0,0,0-13.11,13.11V310.05a13.12,13.12,0,0,0,13.11,13.1H413a13.12,13.12,0,0,0,13.1-13.1V100.36A13.12,13.12,0,0,0,413,87.25Z" />
                        <path d="M324.13,405.65h-138a15,15,0,0,1-14-20.34l20-52.5a15,15,0,0,1,14-9.66h98a15,15,0,0,1,14,9.66l20,52.5a15,15,0,0,1-14,20.34Zm-116.23-30h94.46l-8.57-22.5H216.48Z" />
                        <path d="M354.61,405.65h-199a15,15,0,1,1,0-30h199a15,15,0,0,1,0,30Z" />
                        <path d="M441.13,303.66h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-between w-full">
                    <p>{e.name}</p>
                    <p
                      className={e.changeColor + " p-1 rounded-md text-cyan-50"}
                    >
                      {e.state}
                    </p>
                  </div>

                  <div className="flex flex-col bg-slate-200 items-center gap-2 p-1">
                    <p>Change state</p>
                    <div className="flex w-full flex-wrap text-xs gap-1 justify-center p-2">
                      <button
                        onClick={() =>
                          changeStateHandler({ state: "Done", id: e.id })
                        }
                        className="cursor-pointer btn p-1 rounded-md bg-green-500	"
                      >
                        Done
                      </button>
                      <button
                        onClick={() =>
                          changeStateHandler({ state: "Processing", id: e.id })
                        }
                        className="cursor-pointer	btn p-1 rounded-md bg-yellow-500"
                      >
                        Processing
                      </button>
                      <button
                        onClick={() =>
                          changeStateHandler({ state: "Help", id: e.id })
                        }
                        className="cursor-pointer btn p-1 rounded-md bg-red-500	"
                      >
                        Help
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-4 w-[30%]">
            {col3?.map((e) => {
              return (
                <div
                  className="flex flex-col gap-4 border items-center p-2"
                  key={e.id}
                >
                  <div className="flex justify-center">
                    <svg
                      className="w-[30%]"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <g data-name="1" id="_1">
                        <path d="M413,353.15H97.24a43.15,43.15,0,0,1-43.11-43.1V100.36A43.16,43.16,0,0,1,97.24,57.25H413a43.15,43.15,0,0,1,43.1,43.11V310.05A43.14,43.14,0,0,1,413,353.15ZM97.24,87.25a13.12,13.12,0,0,0-13.11,13.11V310.05a13.12,13.12,0,0,0,13.11,13.1H413a13.12,13.12,0,0,0,13.1-13.1V100.36A13.12,13.12,0,0,0,413,87.25Z" />
                        <path d="M324.13,405.65h-138a15,15,0,0,1-14-20.34l20-52.5a15,15,0,0,1,14-9.66h98a15,15,0,0,1,14,9.66l20,52.5a15,15,0,0,1-14,20.34Zm-116.23-30h94.46l-8.57-22.5H216.48Z" />
                        <path d="M354.61,405.65h-199a15,15,0,1,1,0-30h199a15,15,0,0,1,0,30Z" />
                        <path d="M441.13,303.66h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-between w-full">
                    <p>{e.name}</p>
                    <p
                      className={e.changeColor + " p-1 rounded-md text-cyan-50"}
                    >
                      {e.state}
                    </p>
                  </div>

                  <div className="flex flex-col bg-slate-200 items-center gap-2 p-1">
                    <p>Change state</p>
                    <div className="flex w-full flex-wrap text-xs gap-1 justify-center p-2">
                      <button
                        onClick={() =>
                          changeStateHandler({ state: "Done", id: e.id })
                        }
                        className="cursor-pointer btn p-1 rounded-md bg-green-500	"
                      >
                        Done
                      </button>
                      <button
                        onClick={() =>
                          changeStateHandler({ state: "Processing", id: e.id })
                        }
                        className="cursor-pointer	btn p-1 rounded-md bg-yellow-500"
                      >
                        Processing
                      </button>
                      <button
                        onClick={() =>
                          changeStateHandler({ state: "Help", id: e.id })
                        }
                        className="cursor-pointer btn p-1 rounded-md bg-red-500	"
                      >
                        Help
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
