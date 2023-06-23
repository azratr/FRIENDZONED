import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from './postShare';

function ShareModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
          overlayColor= {theme.colorScheme === 'dark' ? theme.colors.dark[9]
          : theme.colors.gray[2]}
          overlayopacity= {0.55}
          overlayblur= {3}
          size='55%'
          opened = {modalOpened}
          onClose = {()=>setModalOpened(false)}
        
      >
       
        
      <PostShare/>   
      </Modal>

      
    </>
  );
}
export default ShareModal