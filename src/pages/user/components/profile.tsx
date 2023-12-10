import React from "react";

function Profile({ data }: any) {
  //   const userdata = data && data[0].userDetail;
  return (
    <>
      {data && (
        <div className=" p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md flex  space-x-4 h-96 my-5">
          <div>
            <h1 className="text-4xl mb-5">Profile</h1>
            <p className="text-xl font-medium text-black">
              <strong>Name</strong> {data.name}
            </p>
            <p className="text-xl font-medium text-black">
              <strong>Last Name:</strong> {data.lastName}
            </p>
            <p className="text-xl font-medium text-black">
              <strong>Email:</strong> {data.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
