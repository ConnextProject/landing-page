import React, { Component } from 'react';



// class Medium extends Component{

//  mediumOutput () {
//     const result = async () => {
//         let response = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fconnext`,
//           {
//             accept: 'application/json',
//           })
//           return response
//         }
//     const parse = async () => {
//       const response = await new result()
//       console.log(response)
//       if (response.request.response){
//         let feed = response.request.response
//         console.log("Response: " + feed)
//       return feed
//       }
//     }
//     return(parse)
//   };

// render(){
//   return (
//     <div>Hello world</div>
//     )
//   }
// };




class Jobs extends Component {
  render() {
    return (
      <div>
        Jobs!
      </div>
    )
  }
};

export default Jobs;
