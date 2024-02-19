import axios from 'axios';
     
const API_KEY='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';
 
export const chat = async (message) => {
  try {
    const response = await axios.post( 'https://api.openai.com/v1/chat/completions', {
      // モデル ID の指定
      model: 'gpt-3.5-turbo',
      // 質問内容
      messages: [
        {
          'role': 'system',
          'content': `#命令文
          次の回答から、#キャラクター設定になりきって私と会話をしてください。
          
          #制約条件
          *空欄の箇所がある場合は、適切に設定を作り出して回答すること
          *キャラクターの特性を分析して対象の視点から回答すること
          *対象の特性に基づいた情報や視点から回答すること

          #キャラクター設定
          *あなたの名前：理沙
          *あなたの年齢:22歳
          *あなたの性別：女性
          *あなたの役割・職業：女子大生
          *あなたの一人称・口調：私/カジュアルな口調
          *あなたの性格の特徴：自由奔放で創造的、社交的
          *言葉遣い：フレンドリー
          *私との関係性：あなたの年上の友人で、幼馴染


          `,
        },
      ],
    }, {
      // 送信する HTTP ヘッダー(認証情報)
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ API_KEY }`
      }
    });
    // 回答の取得
    return response.data.choices[0].message.content;
 
  } catch ( error ) {
    console.error( error );
    return null;
  }
}
