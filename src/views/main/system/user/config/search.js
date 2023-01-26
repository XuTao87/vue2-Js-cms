export const search = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 20px'
  },
  formItems: [{
      type: 'input',
      label: 'id',
      rules: [],
      placeholder: '请输入id',
      field: 'id',
      slot: ''
    },
    {
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名',
      field: 'name'
    },
    {
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      field: 'realname'
    },
    {
      type: 'input',
      label: '手机号',
      placeholder: '请输入手机号',
      field: 'cellphone'
    },
    {
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请选择创建时间范围',
      field: 'createAt',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}