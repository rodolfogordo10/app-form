import React, { Fragment, useState } from 'react';
import { StyledCard } from './styles';
import Loading from 'components/Loading';
import TextField from 'components/text-field';
import Select from 'components/Select';
import Grid from 'components/grid/Grid';
import Divider from 'components/Divider';
import TextArea from 'components/textarea';
import { Button } from 'components/buttons';
import { H3, H5 } from 'components/Typography';
import { useFormik } from 'formik';

import { useValidationSchema } from 'hooks/form';
import { IForm, IFormPost } from 'interfaces/form';
import { toApi } from 'helpers/form';
import { postForm } from 'services/form';
import { getColor } from 'utils/selectData';

import { notificationState, notificationError } from 'utils/notification';

const FormaPage = () => {
  const schema = useValidationSchema();

  const colorItens = getColor();

  const initialValues: IForm = {
    name: '',
    email: '',
    cpf: '',
  };

  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmit = async (values: IFormPost) => {
    try {
      setLoading(true);

      const reponse = await postForm(toApi(values));

      setLoading(false);

      notificationState(reponse);
    } catch (error) {
      notificationError({ error });
      setLoading(false);
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    onSubmit: handleFormSubmit,
    initialValues: initialValues,
    validationSchema: schema,
  });

  return (
    <Fragment>
      <Loading isActive={loading} />
      <StyledCard mx="auto" my="2rem" boxShadow="large" p="40px">
        <form onSubmit={handleSubmit}>
          <Grid container horizontal_spacing={6} vertical_spacing={4}>
            <Grid item md={12} xs={12}>
              <H3 textAlign="center" mb="0.5rem">
                Formulário do John Doe
              </H3>
            </Grid>
            <Grid item md={12} xs={12}>
              <H5
                fontWeight="600"
                fontSize="12px"
                color="gray.800"
                textAlign="center"
                mb="2.25rem"
              >
                Vamos ser Feliz?
              </H5>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                name="name"
                label={'Nome completo'}
                fullwidth
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name || ''}
                errorText={touched.name && errors.name}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                name="cpf"
                label={'CPF'}
                mask="cpf"
                fullwidth
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpf || ''}
                errorText={touched.cpf && errors.cpf}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                name="email"
                type="email"
                label={'Email'}
                fullwidth
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email || ''}
                errorText={touched.email && errors.email}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <Select
                name="color"
                options={colorItens}
                label={'Cor preferida'}
                value={values.color}
                placeholder={'Cor preferida'}
                errorText={touched.color && errors.color}
                onChange={(val) => setFieldValue('color', val)}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextArea
                rows={6}
                fullwidth
                name="observation"
                label={'Observação'}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.observation || ''}
                errorText={touched.observation && errors.observation}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <Divider />
            </Grid>

            <Grid item md={12} xs={12}>
              <Button
                mb="1.65rem"
                variant="contained"
                color="primary"
                type="submit"
                fullwidth
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </form>
      </StyledCard>
    </Fragment>
  );
};

export default FormaPage;
