import axios from 'axios';

export default {
  methods:{
    async getBranchOfficeRegistries(){
      const dataBranchOffice =
        await axios.get("http://localhost:3000/branch-office")
          .then(resp => resp.data);
      return { dataBranchOffice }
    }
  }
}
