import {
  GET_PORTFOLIO_LIST,
  GET_PORTFOLIO_LIST_SUCCESS,
  GET_PORTFOLIO_LIST_ERROR,
} from './../actionTypes';


const defaultState = {
  loading: null,
  error: {},
  data: [
    {
      title: 'Broken dimension',
      caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      description: '',
      image: '0.jpg',
      media: {
        type: 'video',
        sources: [
          {
            src: 'http://oxo2.ru/video/movie.mp4',
            type: 'video/mp4'
          }
        ]
      }
    },
    {
      title: 'Clean up',
      caption: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
      description: '',
      image: '1.jpg',
      media: {
        type: 'audio',
        sources: [
          {
            src: 'http://oxo2.ru/video/HernanCerbello-Cali.mp3',
            type: 'audio/mp3'
          }
        ]
      }
    },
    {
      title: 'Right combination',
      caption: 'Cras mauris elit, semper at augue et, convallis efficitur metus',
      description: '',
      image: '2.jpg',
      media: {
        type: 'video',
        sources: [
          {
            src: 'http://oxo2.ru/video/movie.mp4',
            type: 'video/mp4'
          }
        ]
      }
    },
    {
      title: 'Tibet',
      caption: 'Integer tincidunt consequat porta',
      description: '',
      image: '3.jpg',
      media: {
        type: 'audio',
        sources: [
          {
            src: 'http://oxo2.ru/video/HernanCerbello-Cali.mp3',
            type: 'audio/mp3'
          }
        ]
      }
    },
    {
      title: 'Slowmotion apacolypse',
      caption: 'Nam sagittis finibus turpis luctus euismod',
      description: '',
      image: '4.jpg',
      media: {
        type: 'audio',
        sources: [
          {
            src: 'http://oxo2.ru/video/HernanCerbello-Cali.mp3',
            type: 'audio/mp3'
          }
        ]
      }
    },
    {
      title: 'AI\'s war',
      caption: 'Nam auctor neque arcu, non consequat est tempus nec',
      description: '',
      image: '5.jpg',
      media: {
        type: 'video',
        sources: [
          {
            src: 'http://oxo2.ru/video/movie.mp4',
            type: 'video/mp4'
          }
        ]
      }
    },
    {
      title: 'Moon\'s surface',
      caption: 'Mauris pulvinar efficitur vulputate',
      description: '',
      image: '6.jpg',
      media: {
        type: 'audio',
        sources: [
          {
            src: 'http://oxo2.ru/video/HernanCerbello-Cali.mp3',
            type: 'audio/mp3'
          }
        ]
      }
    },
    {
      title: 'Acoustic step',
      caption: 'Cras in rutrum lectus. In convallis odio ac varius aliquam',
      description: '',
      image: '7.jpg',
      media: {
        type: 'audio',
        sources: [
          {
            src: 'http://oxo2.ru/video/HernanCerbello-Cali.mp3',
            type: 'audio/mp3'
          }
        ]
      }
    },
    {
      title: 'Action video samples',
      caption: 'Nam ut sagittis dolor',
      description: '',
      image: '8.jpg',
      media: {
        type: 'audio',
        sources: [
          {
            src: 'http://oxo2.ru/video/HernanCerbello-Cali.mp3',
            type: 'audio/mp3'
          }
        ]
      }
    },
    {
      title: 'Animation video sample',
      caption: 'Ut nec urna euismod magna accumsan commodo',
      description: '',
      image: '9.jpg',
      media: {
        type: 'video',
        sources: [
          {
            src: 'http://oxo2.ru/video/movie.mp4',
            type: 'video/mp4'
          }
        ]
      }
    },
  ]
};

export default function (state = defaultState, action) {
  switch (action.type) {

    case GET_PORTFOLIO_LIST:
      return Object.assign({}, state, {
        loading: true,
        error: {}
      })

    case GET_PORTFOLIO_LIST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.data
      })

    case GET_PORTFOLIO_LIST_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      })

    default:
      return state;
  }
}
