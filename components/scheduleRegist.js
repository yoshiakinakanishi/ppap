import * as React from 'react';
import css from 'styled-jsx/css';
import { compose, pure } from 'recompose';
import schedule from './schedule';
import { Link } from '../routes';

const scheduleRegistStyle = css`
.scheduleRegist_mainTitle {
    position: absolute;
    top: 90px;
    left: 300px;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 35px;
    color: #404040;
}
#scheduleRegist {
    position: absolute;
    top: 160px;
    left: 300px;
    width: 950px;
    height: 1200px;
    padding: 40px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}
.scheduleRegist_Title {
    font-size: 20px;
    font-weight: bold;
    color: #ff528f;
}
.checkBtnScale {
	transform: scale(1.4);
}
.datetime-local {
    font-size: 14px;
}
.scheduleRegist_TextField {
    width: 400px;
    height: 30px;
    margin-bottom: 20px;
    font-size: 14px;
}
.scheduleRegist_pulldown {
    width: 220px;
    height: 30px;
    margin-bottom: 30px;
    font-size: 14px;
 }
 .scheduleRegist_SubText {
    color: #a9a9a9;
}
.scheduleRegist_ListBtn {
    padding-left: 0px;
    margin-top: 30px;
}
.scheduleRegist_footer {
    width: 280px;
    height: 40px;
    margin: 40px auto 10px auto;
    padding-left: 0px;
    color: gray;
}
.scheduleRegist_footer li {
    float: left;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 3px;
}
.scheduleRegist_footer .next {
    background-color: #00bcd4;
    color: #fff;
    margin-left: 40px;
}
.scheduleRegist_footer .next:hover {
    opacity: 0.7;
    cursor: pointer;
    transition: 0.3s;
}
.scheduleRegist_footer .back:hover {
    background-color: #eaeaea;
    cursor: pointer;
    transition: 0.3s;
}
`;

export default compose(
    pure
)(() => (
    <schedule>

        <div className="scheduleRegist_mainTitle">
            新規配信登録   
        </div>

        <div id="scheduleRegist">

            <label className="scheduleRegist_Title">通知アイコンのURL指定</label><br/>
            <input type="text" placeholder="通知アイコンのURLを入力してください" className="scheduleRegist_TextField"></input><br/><br/>

            <label className="scheduleRegist_Title">プラットフォーム</label><br/>
            <input type="checkbox" className="checkBtnScale"></input>　PC<br/>
            <input type="checkbox" className="checkBtnScale"></input>　SP<br/><br/>
        
            <label for="name" className="scheduleRegist_Title">タイムゾーン</label><br/>
            <select className="scheduleRegist_pulldown">
                <option value="hogehoge">123</option>
                <option value="fugafuga">456</option>
                <option value="hogefuga">789</option>                
            </select><br/><br/>

            <label for="name" className="scheduleRegist_Title">配信日時指定</label><br/>
            <input type="datetime-local" className="datetime-local"></input><br/><br/><br/>

            <label for="name" className="scheduleRegist_Title">セグメント条件</label><br/>
            <select className="scheduleRegist_pulldown">
                <option value="hogehoge">ほげほげ</option>
                <option value="fugafuga">ふがふが</option>
                <option value="hogefuga">ほげふが</option>                
            </select><br/><br/>

            <label className="scheduleRegist_Title">配信タイトル</label><br/>
            <input type="text" placeholder="タイトルを入力してください" className="scheduleRegist_TextField"></input><br/><br/>

            <label className="scheduleRegist_Title">本文</label><br/>
            <small className="scheduleRegist_SubText">PCとSPの本文をそれぞれ自由入力してくださいしてください</small><br/><br/>
            <input type="text" placeholder="PC用の本文を入力してください" className="scheduleRegist_TextField"></input><br/>
            <input type="text" placeholder="SP用の本文を入力してください" className="scheduleRegist_TextField"></input><br/><br/>

            <label className="scheduleRegist_Title">ディープリンク</label><br/>
            <small className="scheduleRegist_SubText">特定のコンテンツへ直接遷移させたい場合にディープリンクを指定します</small><br/><br/>
            <input type="text" placeholder="PC用のURLを入力してください" className="scheduleRegist_TextField"></input><br/>
            <input type="text" placeholder="SP用のURLを入力してください" className="scheduleRegist_TextField"></input><br/><br/>

            <label className="scheduleRegist_Title">TTL指定</label><br/>
            <small className="scheduleRegist_SubText">ゼロを指定した場合は、デフォルト値4週間(=24192000秒)となります</small><br/><br/>
            <input type="text" placeholder="サーバー保存期間（秒）を1〜2592000で指定してください" className="scheduleRegist_TextField"></input><br/>

            <ul className="scheduleRegist_footer">
                <Link route="/schedule">
                    <li className="back">戻る</li>
                </Link>
                <Link route="/schedule/confirm">
                    <li className="next">進む</li>
                </Link>
            </ul>

        </div>
        <style jsx>{scheduleRegistStyle}</style>
    </schedule>
));