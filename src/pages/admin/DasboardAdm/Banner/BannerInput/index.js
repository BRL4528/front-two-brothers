import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import { uploadFileRequest } from '~/store/modules/file/actions';

import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const dispatch = useDispatch();
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    dispatch(uploadFileRequest(url));
  }

  return (
    <Container>
      <label className="btn btn1" htmlFor="avatar">
        <strong>Upload</strong>
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
