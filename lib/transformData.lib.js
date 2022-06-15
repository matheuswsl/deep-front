export default {
  methods:{
    transformData(data){
      const {branch} = data;
      delete data.branch;
      const newData = Object.assign({}, data);
      newData.branch = branch?.id;
      return newData
    }
  }
}
