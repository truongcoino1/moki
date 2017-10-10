package ambe.com.vn.moki.adapters;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;

import java.util.ArrayList;

/**
 * Created by HoangNV on 10/10/2017.
 */

public class ViewPagerAdapter extends FragmentPagerAdapter {
    ArrayList<Fragment> arr;
    public ViewPagerAdapter(FragmentManager fm, ArrayList<Fragment> arr) {
        super(fm);
        this.arr=arr;

    }

    @Override
    public Fragment getItem(int position) {
        Fragment fragment=arr.get(position);
        Bundle bundle = new Bundle();
        if (position < 3) {
            bundle.putInt("POSITION", position);
            fragment.setArguments(bundle);
        }
        return fragment;
    }

    @Override
    public int getCount() {
        return arr.size();
    }
}
