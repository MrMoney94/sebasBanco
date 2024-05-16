import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {CustomInput} from '../../molecules/global/customInput';
import {Footer} from './footer';
import {
  formatDate,
  isValidDate,
  validatorDescription,
  validatorID,
  validatorLogo,
  validatorName,
} from '../../../utils/validator';
import {AddProduct, VerifyId} from '../../../core';
import {GlobalStateContext} from '../../../reducer/GlobalState';
import {PRODUCTS} from '../../../reducer/types';
import {IProduct} from '../../../interface/global';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type Props = {};

const FormOrganism: React.FC<Props> = () => {
  const {navigate} = useNavigation<NavigationProp<any, any>>();
  const [state, dispatch] = useContext(GlobalStateContext);
  const currentDate = new Date()
    .toISOString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('/');
  const [id, setId] = useState<string>('');
  const [errorId, setErrorId] = useState<any>({valid: true, name: ''});
  const [name, setName] = useState<string>('');
  const [errorName, setErrorName] = useState<any>({valid: true, name: ''});
  const [description, setDescription] = useState<string>('');
  const [errorDescription, setErrorDescription] = useState<any>({
    valid: true,
    name: '',
  });
  const [logo, setLogo] = useState<string>('');
  const [errorLogo, setErrorLogo] = useState<any>({valid: true, name: ''});
  const [date, setDate] = useState<string>(currentDate);
  const [errorDate, setErrorDate] = useState<any>({valid: true, name: ''});
  const [loading, setLoading] = useState<boolean>(false);

  const resetForm = () => {
    setId('');
    setName('');
    setDescription('');
    setLogo('');
    setDate(currentDate);
    setErrorId({valid: true, name: ''});
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
      id !== '' &&
      errorId.valid &&
      name !== '' &&
      errorName.valid &&
      description !== '' &&
      errorDescription.valid &&
      logo !== '' &&
      errorLogo.valid &&
      date !== '' &&
      errorDate.valid;

    if (allValid) {
      (async () => {
        const dateRelease = date.replace(/\//g, '-');
        const dateRevision = `${date.split('/')[0]}-${date.split('/')[1]}-${
          parseInt(date.split('/')[2], 10) + 1
        }`;
        const dataSend: IProduct = {
          id,
          name,
          description,
          logo,
          date_release: dateRelease.split('-').reverse().join('-'),
          date_revision: dateRevision.split('-').reverse().join('-'),
        };

        const response = await AddProduct(dataSend);

        if (response.status === 200) {
          dispatch({
            type: PRODUCTS,
            data: {products: [...state?.products, {...dataSend}]},
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
          onChangeText={setId}
          value={id}
          autoCapitalize="none"
          isValid={errorId.valid}
          errorName={errorId.name}
          onBlur={() => {
            if (validatorID(id)) {
              (async () => {
                const data = await VerifyId({id: id});
                setErrorId({valid: !data, name: 'ID existente'});
              })();
            } else {
              setErrorId({valid: validatorID(id), name: 'ID no válido'});
            }
          }}
        />
        <CustomInput
          label="Nombre"
          onChangeText={setName}
          value={name}
          autoCapitalize="none"
          isValid={errorName.valid}
          errorName={errorName.name}
          onBlur={() =>
            setErrorName({
              valid: validatorName(name),
              name: 'Nombre no válido',
            })
          }
        />
        <CustomInput
          label="Descripcion"
          onChangeText={setDescription}
          value={description}
          autoCapitalize="words"
          isValid={errorDescription.valid}
          errorName={errorDescription.name}
          onBlur={() =>
            setErrorDescription({
              valid: validatorDescription(description),
              name: 'Este campo es requerido!',
            })
          }
        />
        <CustomInput
          label="Logo"
          onChangeText={setLogo}
          value={logo}
          autoCapitalize="none"
          isValid={errorLogo.valid}
          errorName={errorLogo.name}
          onBlur={() =>
            setErrorLogo({
              valid: validatorLogo(logo),
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

export default FormOrganism;
