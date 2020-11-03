import pyxel


class App:

    def __init__(self):
        pyxel.init(200, 150, caption="Sound API")

        # ch0 前半

        pyxel.sound(0).set(

            # 音程(#=シャープ、-＝フラット、r=休符)
            "e0e1e0e1e0e1e0e1 a0a1a0a1a0a1a0a1 g#0g#1g#0g#1e0e1e0e1 a0a1a0a1a0a1b0c1",
            "t",  # 音色
            "4",  # 音量
            "f",  # エフェクト
            25,  # テンポ
        )

        # ch1 前半

        pyxel.sound(1).set(

            # 音程(#=シャープ、-＝フラット、r=休符)
            "e3e3b2c3d3d3c3b2 a2a2rc3e3e3d3c3 b2b2rc3d3d3e3e3 c3c3a2a2a2a2rr",
            "t",
            "7",  # 音量
            "nfnnnfnn nfnnnfnn nfnnnfnf nfnfnfnn",  # エフェクト
            25,  # テンポ
        )

        # ch0 後半
        pyxel.sound(2).set(
            "d1d0rd0rd0a0d0 c0c1rc1c0g0g0r b0b1b0b1e0e1e0g#1 a0e1a0e1a0e1a0e1",
            "t",
            "4",
            "f",
            25,
        )

        # ch1 後半
        pyxel.sound(3).set(
            "rd3d3f3a3a3g3f3 e3e3rc3e3e3d3c3 b2b2b2c3d3d3e3e3 c3c3a2a2a2a2rr",
            "t",
            "7",
            "nnfnnfnn nfnnnfnn nfnnnfnf nfnfnfnn",
            25,
        )

        # ch2 前半
        pyxel.sound(4).set(
            "b2b2g#2a2b2b2a2g#2 e2e2ra2c3c3b2a2 g#2e2g#2a2b2b2c3c3 a2a2e2e2e2e2rr",
            "s",
            "6",
            "nfnnnfnn nfnnnfnn nnffnfnf nfnfnfnn",
            25
        )

        # ch2 後半
        pyxel.sound(5).set(
            "rf2f2a2c3c3b2a2 g2g2re2g2g2f2e2 g#2e2g#2a2b2b2c3c3 a2a2e2e2e2e2rr",
            "s",
            "6",
            "nnfnnfnn nfnnnfnn nnnnnfnf nfnfnnnn",
            25
        )

        self.is_playing = [True] * 3
        self.play_music(True, True, True)
        pyxel.run(self.update, self.draw)

    def play_music(self, ch0, ch1, ch2):
        self.is_playing = (ch0, ch1, ch2)

        if ch0:
            pyxel.play(0, [0, 2], loop=True)
        else:
            pyxel.stop(0)

        if ch1:
            pyxel.play(1, [1, 3], loop=True)
        else:
            pyxel.stop(1)

        if ch2:
            pyxel.play(2, [4, 5], loop=True)
        else:
            pyxel.stop(2)

    def update(self):
        if pyxel.btnp(pyxel.KEY_Q):
            pyxel.quit()

        if pyxel.btnp(pyxel.KEY_SPACE):
            if True in self.is_playing:
                self.play_music(False, False, False)
            else:
                self.play_music(True, True, True)

    def draw(self):
        pyxel.cls(0)


App()
