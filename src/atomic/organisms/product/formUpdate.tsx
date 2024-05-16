import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {CustomInput} from '../../molecules/global/customInput';
import {Footer} from './footer';
import {
  formatDate,
  isValidDate,
  validatorDescription,
  validatorLogo,
  validatorName,
} from '../../../utils/validator';
import {UpdateProduct} from '../../../core';
import {GlobalStateContext} from '../../../reducer/GlobalState';
import {PRODUCTS} from '../../../reducer/types';
import {IProduct} from '../../../interface/global';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const FormUpdateOrganism: React.FC<IProduct> = ({
  id,
  name,
  description,
  logo,
  date_release,
}) => {
  const currentDate = date_release.split('T')[0].split('-').reverse().join('/');
  const {navigate} = useNavigation<NavigationProp<any, any>>();
  const [state, dispatch] = useContext(GlobalStateContext);
  const [nameEdit, setName] = useState<string>(name);
  const [errorName, setErrorName] = useState<any>({valid: true, name: ''});
  const [descriptionEdit, setDescription] = useState<string>(description);
  const [errorDescription, setErrorDescription] = useState<any>({
    valid: true,
    name: '',
  });
  const [logoEdit, setLogo] = useState<string>(logo);
  const [errorLogo, setErrorLogo] = useState<any>({valid: true, name: ''});
  const [date, setDate] = useState<string>(currentDate);
  const [errorDate, setErrorDate] = useState<any>({valid: true, name: ''});
  const [loading, setLoading] = useState<boolean>(false);

  const resetForm = () => {
    setName('');
    setDescription('');
    setLogo('');
    setDate(currentDate);
    setErrorName({valid: true, name: ''});
    setErrorDescription({valid: true, name: ''});
    setErrorLogo({valid: true, name: ''});
    setErrorDate({valid: true, name: ''});
  };

  const handleDateChange = (text: string): void => {
    const formattedText = formatDate(text);
    setDate(formattedText);

    if (formattedText.length === 10 && !isValidDate(formattedText)) {
      setErrorDate({
        valid: false,
        name: 'La fecha debe ser posterior a la fecha actual',
      });
    } else {
      setErrorDate({valid: true, name: ''});
    }
  };

  const onProcess = () => {
    setLoading(true);
    const allValid =
      nameEdit !== '' &&
      errorName.valid &&
      descriptionEdit !== '' &&
      errorDescription.valid &&
      logoEdit !== '' &&
      errorLogo.valid &&
      date.length > 9 &&
      errorDate.valid;

    if (allValid) {
      (async () => {
        const dateRelease = date.replace(/\//g, '-');
        const dateRevision = `${date.split('/')[0]}-${date.split('/')[1]}-${
          parseInt(date.split('/')[2], 10) + 1
        }`;
        const dataUpdate: IProduct = {
          id,
          name: nameEdit,
          description: descriptionEdit,
          logo: logoEdit,
          date_release: dateRelease.split('-').reverse().join('-'),
          date_revision: dateRevision.split('-').reverse().join('-'),
        };

        const response = await UpdateProduct(dataUpdate);

        if (response.status === 200) {
          const updateState = state?.products.map(product =>
            product.id === id ? {...product, ...dataUpdate} : product,
          );
          dispatch({
            type: PRODUCTS,
            data: {products: updateState},
          });
        }

        resetForm();
        setLoading(false);
        navigate('home');
      })();
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <ScrollView style={styles.fl}>
        <CustomInput
          label="ID"
          value={id}
          editable={false}
          disabled={true}
          isValid={true}
          errorName=""
        />
        <CustomInput
          label="Nombre"
          onChangeText={setName}
          value={nameEdit}
          autoCapitalize="words"
          isValid={errorName.valid}
          errorName={errorName.name}
          onBlur={() =>
            setErrorName({
              valid: validatorName(nameEdit),
              name: 'Nombre no válido',
            })
          }
        />
        <CustomInput
          label="Descripcion"
          onChangeText={setDescription}
          value={descriptionEdit}
          autoCapitalize="sentences"
          isValid={errorDescription.valid}
          errorName={errorDescription.name}
          onBlur={() =>
            setErrorDescription({
              valid: validatorDescription(descriptionEdit),
              name: 'Este campo es requerido!',
            })
          }
        />
        <CustomInput
          label="Logo"
          onChangeText={setLogo}
          value={logoEdit}
          autoCapitalize="none"
          isValid={errorLogo.valid}
          errorName={errorLogo.name}
          onBlur={() =>
            setErrorLogo({
              valid: validatorLogo(logoEdit),
              name: 'Este campo es requerido!',
            })
          }
        />
        <CustomInput
          label="Fecha Liberación"
          onChangeText={handleDateChange}
          value={date}
          autoCapitalize="none"
          isValid={errorDate.valid}
          keyboardType="numeric"
          errorName={errorDate.name}
        />
        <CustomInput
          label="Fecha Revisión"
          value={`${date.split('/')[0]}/${date.split('/')[1]}/${
            parseInt(date.split('/')[2], 10) + 1
          }`}
          editable={false}
          isValid={true}
          disabled={true}
          errorName=""
        />
      </ScrollView>
      <Footer
        onPress={() => onProcess()}
        onReset={() => resetForm()}
        loading={loading}
      />
    </>
  );
};

const styles = StyleSheet.create({
  fl: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default FormUpdateOrganism;
