const { supabase } = require('../database');


exports.createFuncionario = async (nome, email, password) => {
  const { data, error } = await supabase.from('Funcionario').insert({ name: nome, email: email, password: password}, { returning: 'minimal' }).select();
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  console.log(data);
  return  {data,error};
};

exports.updateFuncionario = async (id_funcionario, nome, email, password) => {
  const { data, error } = await supabase.from('Funcionario').update({ name: nome, email: email, password: password}).eq('id_funcionario', id_funcionario).select();
  if (error) {
    console.log('deu erro');
    console.log(error)
  }
  console.log(data);
  return  {data,error};
};

exports.selectFuncionarios = async () => {
  const { data, error } = await supabase.from('Funcionario').select('id_funcionario, nome, password, email');
  if (error) {
    console.log('Ocorreu um erro');
    console.log(error);
  }
  console.log(data);
  return { data, error };
};