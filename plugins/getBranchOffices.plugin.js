import axios from 'axios';

async function getBranchOfficeRegistries(){
  const dataBranchOffice =
    await axios.get("http://localhost:3000/branch-office")
      .then(resp => resp.data);
  return { dataBranchOffice }
}

export default ({ app }, inject) => {
  inject('getBranch', getBranchOfficeRegistries);
}
