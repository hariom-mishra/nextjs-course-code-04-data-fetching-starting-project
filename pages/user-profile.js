import React from 'react'

const UserProfilePage = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

export async function getServerSideProps(context){

    const {params, req, res} = context

    return {
        props:{
            name: 'max'
        }
    }
}

export default UserProfilePage
