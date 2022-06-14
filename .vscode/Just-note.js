// *8. Create shareMsg()
async function shareMsg() {
  const result = await liff.shareTargetPicker([
    // {
    //   type: 'flex',
    //   altText: 'งง',
    //   contents: {
    //     type: 'carousel',
    //     contents: [
    //       {
    //         type: 'bubble',
    //         direction: 'ltr',
    //         hero: {
    //           type: 'image',
    //           url: 'https://www.xd8bet.com/wp-content/uploads/2022/06/promotion_7-1.png',
    //           size: 'full',
    //           aspectRatio: '6:3.5',
    //           aspectMode: 'cover',
    //         },
    //         body: {
    //           type: 'box',
    //           layout: 'vertical',
    //           backgroundColor: '#050010FF',
    //           borderColor: '#050010FF',
    //           contents: [
    //             {
    //               type: 'text',
    //               text: 'ทุกยอดฝาก',
    //               weight: 'bold',
    //               size: 'xl',
    //               color: '#FFFFFFFF',
    //               align: 'center',
    //               contents: [],
    //             },
    //             {
    //               type: 'text',
    //               text: 'รับเพิ่ม 5% !!!',
    //               weight: 'bold',
    //               size: '3xl',
    //               color: '#FFFFFFFF',
    //               align: 'center',
    //               contents: [],
    //             },
    //             {
    //               type: 'text',
    //               text: '*โบนัสสูงสุด 2,000 บาท',
    //               weight: 'bold',
    //               size: 'sm',
    //               color: '#FF4242FF',
    //               contents: [],
    //             },
    //           ],
    //         },
    //         footer: {
    //           type: 'box',
    //           layout: 'horizontal',
    //           spacing: 'xl',
    //           margin: 'none',
    //           backgroundColor: '#050010FF',
    //           borderColor: '#050010FF',
    //           contents: [
    //             {
    //               type: 'button',
    //               action: {
    //                 type: 'uri',
    //                 label: 'สมัครสมาชิก',
    //                 uri: 'https://m2.xd8bet.com/dashboard/login?id',
    //               },
    //               color: '#00A921FF',
    //               margin: 'none',
    //               height: 'sm',
    //               style: 'primary',
    //             },
    //             {
    //               type: 'button',
    //               action: {
    //                 type: 'uri',
    //                 label: 'แชร์',
    //                 uri: 'https://linecorp.com',
    //               },
    //               color: '#002BDAFF',
    //               margin: 'none',
    //               height: 'sm',
    //               style: 'primary',
    //             },
    //           ],
    //         },
    //         styles: {
    //           footer: {
    //             separator: false,
    //             separatorColor: '#050010FF',
    //           },
    //         },
    //       },
    //       {
    //         type: 'bubble',
    //         direction: 'ltr',
    //         hero: {
    //           type: 'image',
    //           url: 'https://www.xd8bet.com/wp-content/uploads/2022/06/promotion_9-1.png',
    //           size: 'full',
    //           aspectRatio: '6:3.5',
    //           aspectMode: 'cover',
    //         },
    //         body: {
    //           type: 'box',
    //           layout: 'vertical',
    //           backgroundColor: '#050010FF',
    //           borderColor: '#050010FF',
    //           contents: [
    //             {
    //               type: 'text',
    //               text: 'ทุกยอดฝาก',
    //               weight: 'bold',
    //               size: 'xl',
    //               color: '#FFFFFFFF',
    //               align: 'center',
    //               contents: [],
    //             },
    //             {
    //               type: 'text',
    //               text: 'รับเพิ่ม 5% !!!',
    //               weight: 'bold',
    //               size: '3xl',
    //               color: '#FFFFFFFF',
    //               align: 'center',
    //               contents: [],
    //             },
    //             {
    //               type: 'text',
    //               text: '*โบนัสสูงสุด 2,000 บาท',
    //               weight: 'bold',
    //               size: 'sm',
    //               color: '#FF4242FF',
    //               contents: [],
    //             },
    //           ],
    //         },
    //         footer: {
    //           type: 'box',
    //           layout: 'horizontal',
    //           spacing: 'xl',
    //           margin: 'none',
    //           backgroundColor: '#050010FF',
    //           borderColor: '#050010FF',
    //           contents: [
    //             {
    //               type: 'button',
    //               action: {
    //                 type: 'uri',
    //                 label: 'สมัครสมาชิก',
    //                 uri: 'https://m2.xd8bet.com/dashboard/login?id',
    //               },
    //               color: '#00A921FF',
    //               margin: 'none',
    //               height: 'sm',
    //               style: 'primary',
    //             },
    //             {
    //               type: 'button',
    //               action: {
    //                 type: 'uri',
    //                 label: 'แชร์',
    //                 uri: 'https://linecorp.com',
    //               },
    //               color: '#002BDAFF',
    //               margin: 'none',
    //               height: 'sm',
    //               style: 'primary',
    //             },
    //           ],
    //         },
    //         styles: {
    //           footer: {
    //             separator: false,
    //             separatorColor: '#050010FF',
    //           },
    //         },
    //       },
    //       {
    //         type: 'bubble',
    //         direction: 'ltr',
    //         hero: {
    //           type: 'image',
    //           url: 'https://www.xd8bet.com/wp-content/uploads/2022/06/promotion_10-1.png',
    //           size: 'full',
    //           aspectRatio: '6:3.5',
    //           aspectMode: 'cover',
    //         },
    //         body: {
    //           type: 'box',
    //           layout: 'vertical',
    //           backgroundColor: '#050010FF',
    //           borderColor: '#050010FF',
    //           contents: [
    //             {
    //               type: 'text',
    //               text: 'ทุกยอดฝาก',
    //               weight: 'bold',
    //               size: 'xl',
    //               color: '#FFFFFFFF',
    //               align: 'center',
    //               contents: [],
    //             },
    //             {
    //               type: 'text',
    //               text: 'รับเพิ่ม 5% !!!',
    //               weight: 'bold',
    //               size: '3xl',
    //               color: '#FFFFFFFF',
    //               align: 'center',
    //               contents: [],
    //             },
    //             {
    //               type: 'text',
    //               text: '*โบนัสสูงสุด 2,000 บาท',
    //               weight: 'bold',
    //               size: 'sm',
    //               color: '#FF4242FF',
    //               contents: [],
    //             },
    //           ],
    //         },
    //         footer: {
    //           type: 'box',
    //           layout: 'horizontal',
    //           spacing: 'xl',
    //           margin: 'none',
    //           backgroundColor: '#050010FF',
    //           borderColor: '#050010FF',
    //           contents: [
    //             {
    //               type: 'button',
    //               action: {
    //                 type: 'uri',
    //                 label: 'สมัครสมาชิก',
    //                 uri: 'https://m2.xd8bet.com/dashboard/login?id',
    //               },
    //               color: '#00A921FF',
    //               margin: 'none',
    //               height: 'sm',
    //               style: 'primary',
    //             },
    //             {
    //               type: 'button',
    //               action: {
    //                 type: 'uri',
    //                 label: 'แชร์',
    //                 uri: 'https://linecorp.com',
    //               },
    //               color: '#002BDAFF',
    //               margin: 'none',
    //               height: 'sm',
    //               style: 'primary',
    //             },
    //           ],
    //         },
    //         styles: {
    //           footer: {
    //             separator: false,
    //             separatorColor: '#050010FF',
    //           },
    //         },
    //       },
    //     ],
    //   },
    // },
  ]);
  if (result) {
    alert('Msg was shared!');
  } else {
    alert('ShareTargetPicker was cancelled by user');
  }
  liff.closeWindow();
}
